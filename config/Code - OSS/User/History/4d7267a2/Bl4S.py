from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from database.views import (
    RegisterView, LoginView, 
    UserView, LogoutView,
    IncomingViewSet
)

router = routers.SimpleRouter()
router.register(r"incomings", IncomingViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    ## REGISTER, LOGIN, USER, LOGOUT PATH
    path('api/register/', RegisterView.as_view()),
    path('api/login/', LoginView.as_view()),
    path('api/user/', UserView.as_view()),
    path('api/logout/', LogoutView.as_view()),
]
