# Generated by Django 5.0.1 on 2024-01-16 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_products_price_products_tag'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='imagen',
            field=models.ImageField(default='default.jpg', upload_to='productos/'),
        ),
    ]