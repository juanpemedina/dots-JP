from rest_framework import permissions, viewsets, filters
from .serializers import IncomingSerializer, LoanSerializer, OutgoingSerializer, ItemSerializer, NotificationsSerializer
from .models import Incoming, Loan, Outgoing, Item, Notifications
from django_filters.rest_framework import DjangoFilterBackend


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