from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from database.views import (
    UserRegistrationAPIView,
    UserLoginAPIView,
    UserViewAPI,
    UserLogoutViewAPI,
    IncomingViewSet, LoanViewSet, OutgoingViewSet, ItemViewSet, NotificationsViewSet
)

router = routers.SimpleRouter()
router.register(r"incomings", IncomingViewSet)
router.register(r"loans", LoanViewSet)
router.register(r"items", ItemViewSet)
router.register(r"outgoings", OutgoingViewSet)
router.register(r"notifications", NotificationsViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include(router.urls)),
    ## REGISTER, LOGIN, USER, LOGOUT PATH
    path('api/user/register/', UserRegistrationAPIView.as_view()),
    path('api/user/login/', UserLoginAPIView.as_view()),
    path('api/user/', UserViewAPI.as_view()),
    path('api/user/logout/', UserLogoutViewAPI.as_view()),
]
