#include "Main.h"



Brightness::Brightness()
{
}


Brightness::~Brightness()
{
}

void Brightness::Apply(ALLEGRO_BITMAP* img) {
	//prepare
	Begin(img);
	float total = 0;
	//go through all pixels

	for (int i = 0; i < al_get_bitmap_width(img); i++) {

		for (int j = 0; j < al_get_bitmap_height(img); j++) {

			unsigned char r, g, b;
			
			ALLEGRO_COLOR c = al_get_pixel(original, i, j);

			al_unmap_rgb(c, &r, &g, &b);

			total += r + g + b;

		}
	}

	//find the average value
	total /= ( al_get_bitmap_height(img) * al_get_bitmap_width(img) );
	total /= 3;

	//find the ratio, bring it to 127.5
	total= 127.5/total;


	for (int i = 0; i < al_get_bitmap_width(img); i++) {

		for (int j = 0; j < al_get_bitmap_height(img); j++) {

			unsigned char r, g, b, a;

			ALLEGRO_COLOR c = al_get_pixel(original, i, j);

			al_unmap_rgba(c, &r, &g, &b, &a);

			if (r*total <= 255)
				r *= total;
			else
				r = 255;
			if (g*total <= 255)
				g *= total;
			else
				g = 255;
			if (b*total <= 255)
				b *= total;
			else
				b = 255;

			al_put_pixel(i, j, al_map_rgba(r, g, b, a));
		}
	}
	//wrap up
	End(img);
}
