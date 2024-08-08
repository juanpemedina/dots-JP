from django.contrib import admin
from .models import User, Category, Item, Incoming, IncomingHaveItem, Loan, LoanHaveItem, Outgoing, OutgoingHaveItem, Notifications
# Register your models here.

admin.site.register(User)
admin.site.register(Notifications)
admin.site.register(Category)
admin.site.register(Item)
admin.site.register(Incoming)
admin.site.register(IncomingHaveItem)
admin.site.register(Outgoing)
admin.site.register(OutgoingHaveItem)
admin.site.register(Loan)
admin.site.register(LoanHaveItem)