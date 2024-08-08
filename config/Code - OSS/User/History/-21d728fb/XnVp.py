from django.contrib import admin

# Register your models here.

from .models import Category, Item, Incoming, IncomingHaveItem
from . import models

admin.site.register(Category)
admin.site.register(Item)
admin.site.register(Incoming)
admin.site.register(IncomingHaveItem)

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "first_name", "last_name", "email")


admin.site.register(models.User, UserAdmin)class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "first_name", "last_name", "email")


admin.site.register(models.User, UserAdmin)
