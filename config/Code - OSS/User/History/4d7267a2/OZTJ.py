from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from database.views import (
    UserRegistrationAPIView,
    UserLoginAPIView,
    UserViewAPI,
    UserLogoutViewAPI,
    IncomingViewSet,
    MyProtectedView
)

router = routers.SimpleRouter()
router.register(r"incomings", IncomingViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    ## REGISTER, LOGIN, USER, LOGOUT PATH
    path('api/user/', UserViewAPI.as_view()),
    path('api/user/register/', UserRegistrationAPIView.as_view()),
    path('api/user/login/', UserLoginAPIView.as_view()),
    path('api/user/logout/', UserLogoutViewAPI.as_view()),
    path('protected-view/', MyProtectedView.as_view(), name='protected-view'),
]
