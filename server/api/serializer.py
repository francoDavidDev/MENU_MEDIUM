from rest_framework import serializers
from .models  import Products,Likes

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields='__all__'

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields='__all__'
            
    