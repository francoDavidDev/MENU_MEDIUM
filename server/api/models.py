from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Products(models.Model):
    image = models.ImageField(upload_to='productos/', default='default.jpg')
    title=models.CharField(max_length=200,blank=True,default=False)
    description = models.TextField(max_length=200,blank=True,default=False)
    description2 = models.TextField(max_length=200,blank=True,default=False) #Si esta vacio se guarda igual
    price= models.IntegerField(blank=True,default=False)
    tag= models.CharField(max_length=200,blank=True,default=False)
    likes = models. IntegerField(default = 0)


    def __str__(self):
        return self.title


class Likes(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name = 'user_likes')
    product =  models.ForeignKey(Products, on_delete=models.CASCADE, related_name = 'product_likes')


'''
{
    title: "Espresso",
    description: "Concentrado y fuerte.",
    delay: 0.3,
    image: espresso,
    price: "$950",
    tag: 'coffees',
    description2: "30 ml de Espresso elaborado con granos de café de alta calidad, tostado perfecto para resaltar sus sabores robustos."
  },

  '''