#include "Main.h"



Vibrance::Vibrance()
{
}


Vibrance::~Vibrance()
{
}

void Vibrance::Apply(ALLEGRO_BITMAP* img) {
	//prepare
	Begin(img);

	//go through all pixels

	for (int i = 0; i < al_get_bitmap_height(img); i++) {

		for (int j = 0; j < al_get_bitmap_width(img); j++) {

			unsigned char r, g, b, a;
			ALLEGRO_COLOR c = al_get_pixel(original, j, i);


			al_unmap_rgba(c, &r, &g, &b, &a);

			//(theoretical saturation)
			if (r > g && r > b) {
				g *= 0.8;
				b *= 0.8;
			}
			if (g > r && g > b) {
				r *= 0.8;
				b *= 0.8;
			}
			if (b > g && b > r) {
				r *= 0.8;
				g *= 0.8;
			}


			al_put_pixel(j, i, al_map_rgba(r, g, b, a));
		}
	}

	//wrap up
	End(img);
}