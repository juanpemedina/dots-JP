from rest_framework import serializers
from .models import Incoming, Item, IncomingHaveItem, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = "__all__"


class IncomingHaveItemSerializer(serializers.ModelSerializer):
    item = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = IncomingHaveItem
        fields = ["item", "quantity"]


class IncomingSerializer(serializers.ModelSerializer):
    incominghaveitem_set = IncomingHaveItemSerializer(many=True)

    class Meta:
        model = Incoming
        fields = ["authorizingVolunteer", "donor", "date", "incominghaveitem_set", "id"]

    def create(self, validated_data):
        items_data = validated_data.pop("incominghaveitem_set")
        incoming = Incoming.objects.create(**validated_data)
        for item_data in items_data:
            IncomingHaveItem.objects.create(incoming=incoming, **item_data)
        return incoming
