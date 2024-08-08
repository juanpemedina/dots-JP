from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from database.views import (
    UserRegistrationAPIView,
    UserLoginAPIView,
    UserViewAPI,
    UserLogoutViewAPI,
    IncomingViewSet
)

router = routers.SimpleRouter()
router.register(r"incomings", IncomingViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    path('api/user/register/', UserRegistrationAPIView.as_view()),
    path('api/user/login/', UserLoginAPIView.as_view()),
    path('api/user/', UserViewAPI.as_view()),
    path('api/user/logout/', UserLogoutViewAPI.as_view()),
]
