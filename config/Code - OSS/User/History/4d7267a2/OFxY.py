from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from database.views import RegisterView, LoginView, UserView, LogoutView

router = routers.SimpleRouter()
router.register(r"incomings", IncomingViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    ## REGISTER, LOGIN, USER, LOGOUT PATH
    path('api/register/', RegisterView.as_view()),
    path('api/login/', UserLoginAPIView.as_view()),
    path('api/user/', UserViewAPI.as_view()),
    path('api/logout/', UserLogoutViewAPI.as_view()),
]
