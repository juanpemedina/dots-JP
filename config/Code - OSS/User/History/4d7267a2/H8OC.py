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
router.register(r"register", UserRegistrationAPIView)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    ## REGISTER, LOGIN, USER, LOGOUT PATH
    #path('register/', UserRegistrationAPIView.as_view()),
    path('login/', UserLoginAPIView.as_view()),
    path('user/', UserViewAPI.as_view()),
    path('logout/', UserLogoutViewAPI.as_view()),
]
