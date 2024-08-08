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


# Creating a router for user-related views
user_router = routers.DefaultRouter()
user_router.register(r'users', UserViewAPI.as_view, basename='user')

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    ## REGISTER, LOGIN, USER, LOGOUT,
    path('api/user/register/', UserRegistrationAPIView.as_view()),
    path('api/user/login/', UserLoginAPIView.as_view()),
    path('api/', include(user_router.urls)),
    path('api/user/logout/', UserLogoutViewAPI.as_view()),
]
