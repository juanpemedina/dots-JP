from django.contrib import admin

# Register your models here.

from .models import Category, Item, Incoming, IncomingHaveItem

admin.site.register(Category)
admin.site.register(Item)
admin.site.register(Incoming)
admin.site.register(IncomingHaveItem)

## Change later 


from . import models


class UserAdmin(admin.ModelAdmin):
    list_display = ["email"]


admin.site.register(models.User, UserAdmin)