
from rest_framework import viewsets
from .serializer import ProductSerializer,LikeSerializer
from .models import Products, Likes
from django.http import HttpResponseRedirect
from django.urls import reverse
from jsonview.decorators import json_view
#importado para la hacer peticiones del front
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset= Products.objects.all()

@json_view
def prueba(request):
     print('entro en la vista')
     return {
        'foo': 'bar',
    }


@csrf_exempt 
def LikeView(request,id):
    print('ENTRO EN LA VISTA DEL LIKE')
    print(request.user)
    print(type(id))
    id_int=int(id)
    print(type(id_int))
    
    user = request.user
    product = Products.objects.get(id=id_int)
    current_likes = product.likes
    liked = Likes.objects.filter(user=user, product=product).count()
    if not liked:
        liked = Likes.objects.create(user = user,product= product)
        current_likes = current_like + 1
    else: 
        liked = Likes.objects.create(user = user,product= product).delete()
        current_like = current_like - 1

        
    product.like = current_likes
    product.save()
    #return HttpResponseRedirect(reverse(''))
