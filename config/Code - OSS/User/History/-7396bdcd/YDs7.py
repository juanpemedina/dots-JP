from rest_framework import serializers
from .models import Incoming, Item, Category, IncomingHaveItem, Loan, LoanHaveItem, Outgoing, OutgoingHaveItem, Notifications

from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']
class ItemSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Item
        fields = "__all__"

class IncomingHaveItemSerializer(serializers.ModelSerializer):
    item = serializers.PrimaryKeyRelatedField(queryset=Item.objects.all(), write_only=True)
    name = serializers.StringRelatedField(source='item', read_only=True)

    class Meta:
        model = IncomingHaveItem
        fields = ["item", "quantity", "name"]

class IncomingSerializer(serializers.ModelSerializer):
    incominghaveitem_set = IncomingHaveItemSerializer(many=True)

    class Meta:
        model = Incoming
        fields = [
            "authorizing_volunteer",
            "donor",
            "date",
            "incominghaveitem_set",
            "id",
        ]

    def create(self, validated_data):
        items_data = validated_data.pop("incominghaveitem_set")
        incoming = Incoming.objects.create(**validated_data)
        for item_data in items_data:
            item = item_data["item"] 
            quantity = item_data["quantity"]
            IncomingHaveItem.objects.create(incoming=incoming, item=item, quantity=quantity)
        return incoming

class OutgoingHaveItemSerializer(serializers.ModelSerializer):
    item = serializers.PrimaryKeyRelatedField(queryset=Item.objects.all(), write_only=True)
    name = serializers.StringRelatedField(source='item', read_only=True)
    
    class Meta:
        model = OutgoingHaveItem
        fields = ["item", "quantity", "name"]

class OutgoingSerializer(serializers.ModelSerializer):
    outgoinghaveitem_set = OutgoingHaveItemSerializer(many=True)

    class Meta:
        model = Outgoing
        fields = [
            "authorizing_volunteer",
            "patient_number",
            "date",
            "outgoinghaveitem_set",
            "id",
        ]

    def create(self, validated_data):
        items_data = validated_data.pop("outgoinghaveitem_set")
        outgoing = Outgoing.objects.create(**validated_data)
        for item_data in items_data:
            item = item_data["item"]  # This will now be the Item instance
            quantity = item_data["quantity"]
            OutgoingHaveItem.objects.create(outgoing=outgoing, item=item, quantity=quantity)
        return outgoing

class LoanHaveItemSerializer(serializers.ModelSerializer):
    item = serializers.PrimaryKeyRelatedField(queryset=Item.objects.all(), write_only=True)
    name = serializers.StringRelatedField(source='item', read_only=True)

    class Meta:
        model = LoanHaveItem
        fields = ["item", "quantity", "name"]
        
class NotificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model= Notifications
        fields= ["id", "title", "text"]


class LoanSerializer(serializers.ModelSerializer):
    loanhaveitem_set = LoanHaveItemSerializer(many=True)

    class Meta:
        model = Loan
        fields = [
            "authorizing_volunteer",
            "patient_number",
            "date",
            "state",
            "loanhaveitem_set",
            "id",
        ]

    def create(self, validated_data):
        items_data = validated_data.pop("loanhaveitem_set")
        loan = Loan.objects.create(**validated_data)
        for item_data in items_data:
            item = item_data["item"]
            quantity = item_data["quantity"]
            LoanHaveItem.objects.create(loan=loan, item=item, quantity=quantity)
        return loan