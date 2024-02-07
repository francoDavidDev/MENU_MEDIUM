from django.urls import path, include
from rest_framework.documentation import include_docs_urls

from rest_framework import routers
from api import views 


# api versioning

router =routers.DefaultRouter()
router.register(r'products',views.ProductView,'products')

#router2 =routers.SimpleRouter()
#router.register(r'like',views.LikeView,'like')

urlpatterns =[
    path('api/v1/',include(router.urls)),
    path('prueba/<int:id>/',views.LikeView, name='LikeView'),

    path('prueba/',views.prueba, name='prueba'),

    path('docs/',include_docs_urls(title='Products API')),
]