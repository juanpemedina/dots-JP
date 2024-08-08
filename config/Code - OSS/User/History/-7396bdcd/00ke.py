from rest_framework import serializers
from .models import Incoming, Item, Category, IncomingHaveItem, Loan, LoanHaveItem, Outgoing, OutgoingHaveItem, Notifications

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']
from .models import Incoming, Item, IncomingHaveItem
from django.contrib.auth import get_user_model


# Serializer for user registration
class UserRegistrationSerializer(serializers.ModelSerializer):
    # Define password field
    password = serializers.CharField(max_length=100, min_length=8, style={'input_type': 'password'})
    is_administrator = serializers.BooleanField(default=False)
    is_volunteer = serializers.BooleanField(default=False)

    class Meta:
        # Specify the model to be used by the serializer
        model = get_user_model()
        # Define fields to include in the serializer
        fields = ['username', 'password', 'is_administrator', 'is_volunteer']        
  
    # Method to create a new user
    def create(self, validated_data):
        # Retrieve and hash the password
        user_password = validated_data.get('password', None)
        # Create a new user instance with provided data
        db_instance = self.Meta.model(username=validated_data.get('username'),
                                      is_administrator=validated_data.get('is_administrator'),
                                      is_volunteer=validated_data.get('is_volunteer'))
        db_instance.set_password(user_password)
        db_instance.save()
        return db_instance

# Create a new user instance with provided data
class UserLoginSerializer(serializers.Serializer):
    # Define fields for user login
    email = serializers.CharField(max_length=100)
    username = serializers.CharField(max_length=100, read_only=True)
    password = serializers.CharField(max_length=100, min_length=8, style={'input_type': 'password'})
    token = serializers.CharField(max_length=255, read_only=True)

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
        fields= ["id", "title", "description"]


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