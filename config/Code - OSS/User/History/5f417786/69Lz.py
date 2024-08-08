from rest_framework import permissions, viewsets, filters
from .serializers import IncomingSerializer, LoanSerializer, OutgoingSerializer, ItemSerializer, NotificationsSerializer
from .models import Incoming, Loan, Outgoing, Item, Notifications
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import permissions, viewsets
from .serializers import IncomingSerializer
from .models import Incoming
from django.shortcuts import render
from database.serializers import UserRegistrationSerializer, UserLoginSerializer
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate, get_user_model
from django.conf import settings
from .utils import generate_access_token
import jwt

# View for user registration
class UserRegistrationAPIView(APIView):
    serializer_class = UserRegistrationSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

    # GET method to display a registration message
    def get(self, request):
        content = {'message': 'Hello!, Register Please.'}
        return Response(content)

    # POST method to handle user registration
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        # If is valid, save the new user and generate an access token
        if serializer.is_valid(raise_exception=True):
            new_user = serializer.save()
            if new_user:
                access_token = generate_access_token(new_user)
                data = {'access_token': access_token}
                # Return a success response with the access token and set it as a cookie
                response = Response(data, status=status.HTTP_201_CREATED)
                response.set_cookie(key='access_token', value=access_token, httponly=True)
                return response
        # If is invalid return errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# View for user login
class UserLoginAPIView(APIView):
    serializer_class = UserLoginSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

    # POST method to handle user login
    def post(self, request):
        # Retrieve email and password from request data
        username = request.data.get('username', None)
        user_password = request.data.get('password', None)
        
        # Check that email and password submited
        if not user_password:
            raise AuthenticationFailed('A user password is needed.')

        if not username:
            raise AuthenticationFailed('An username is needed.')

        # Authenticate user using provided email and password
        user_instance = authenticate(username=username, password=user_password)

        # If user is not found, raise an error
        if not user_instance:
            raise AuthenticationFailed('User not found.')

        # If user is active, generate access token/set it as a cookie
        if user_instance.is_active:
            user_access_token = generate_access_token(user_instance)
            response = Response()
            response.set_cookie(key='access_token', value=user_access_token, httponly=True, samesite='None', secure=True)
            response.data = {
                'access_token': user_access_token,
                'is_administrator': user_instance.is_administrator,
                'is_volunteer': user_instance.is_volunteer
            }
            return response

        # If user is not active, return error message
        return Response({
            'message': 'Something went wrong.'
        })


# View to retrieve user information
class UserViewAPI(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

    # GET method to retrieve user data
    def get(self, request):
        # Retrieve access token from request cookies
        user_token = request.COOKIES.get('access_token')

        # Ensure access token is provided previously
        if not user_token:
            raise AuthenticationFailed('Unauthenticated user.')

        # Decode access token and extract user ID
        payload = jwt.decode(user_token, settings.SECRET_KEY, algorithms=['HS256'])

        # Retrieve user object based on user ID
        user_model = get_user_model()
        user = user_model.objects.filter(user_id=payload['user_id']).first()

        # Serialize user data and return response
        user_serializer = UserRegistrationSerializer(user)
        return Response(user_serializer.data)


# View for user logout
class UserLogoutViewAPI(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

    # GET method to handle user logout
    def get(self, request):
        # Retrieve access token from request cookies
        user_token = request.COOKIES.get('access_token', None)
        # If access token exists, delete it from cookies
        if user_token:
            response = Response()
            response.delete_cookie('access_token')
            response.data = {
                'message': 'Logged out successfully.'
            }
            return response
        # If access token does not exist, return message indicating user is already logged out
        response = Response()
        response.data = {
            'message': 'User is already logged out.'
        }
        return response


viewsets.ModelViewSet


class IncomingViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """

    queryset = Incoming.objects.all()
    serializer_class = IncomingSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ["authorizing_volunteer", "donor", "items__name"]


class LoanViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """

    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ["state"]
    search_fields = ["authorizing_volunteer", "patient_number", "items__name"]


class ItemViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """

    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [permissions.AllowAny]


class OutgoingViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """

    queryset = Outgoing.objects.all()
    serializer_class = OutgoingSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ["authorizing_volunteer", "patient_number", "items__name"]


class NotificationsViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    
    queryset = Notifications.objects.all()
    serializer_class = NotificationsSerializer
    pagination_class = None