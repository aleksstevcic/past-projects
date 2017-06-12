#include "Main.h"



Phase::Phase()
{
}


Phase::~Phase()
{
}


void Phase::Apply(ALLEGRO_BITMAP* img) {
	//prepare
	Begin(img);

	//go through all pixels

	for (int i = 0; i < al_get_bitmap_height(img); i++) {

		for (int j = 0; j < al_get_bitmap_width(img); j++) {

			unsigned char r, g, b, a;

			ALLEGRO_COLOR c = al_get_pixel(original, j, i);

			al_unmap_rgba(c, &r, &g, &b, &a);

			

			al_put_pixel(j, i, al_map_rgba(b*g/r, r*b/g, g*r/b, a));

		}
	}

	//wrap up
	End(img);
}
