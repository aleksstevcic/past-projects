#include "Main.h"



Invert::Invert()
{
}


Invert::~Invert()
{
}

void Invert::Apply(ALLEGRO_BITMAP* img) {
	Begin(img);

	for (int i = 0; i <= al_get_bitmap_width(img); i++) {

		for (int j = 0; j <= al_get_bitmap_height(img); j++) {

			unsigned char r, g, b;
			ALLEGRO_COLOR c = al_get_pixel(original, i, j);

			al_unmap_rgb(c, &r, &g, &b);

			r = 255 - r;
			g = 255 - g;
			b = 255 - b;

			al_put_pixel(i, j, al_map_rgb(r, g, b));

		}
	}

	End(img);
}