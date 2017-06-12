#include "Main.h"



Flip::Flip()
{
}


Flip::~Flip()
{
}

void Flip::Apply(ALLEGRO_BITMAP* img, int sel) {
	//prepare
	Begin(img);

	//go through all pixels

	if (sel == 0) {

		for (int i = 0; i < al_get_bitmap_height(img); i++) {

			for (int j = 0; j < al_get_bitmap_width(img); j++) {

				unsigned char r, g, b, a;

				ALLEGRO_COLOR c = al_get_pixel(original, j, i);

				al_unmap_rgba(c, &r, &g, &b, &a);



				al_put_pixel(j, i, al_map_rgba(r, g, b, a));

			}
		}
	}

	if (sel == 1) {

		for (int i = 0; i < al_get_bitmap_height(img); i++) {

			for (int j = 0; j < al_get_bitmap_width(img); j++) {

				unsigned char r, g, b, a;

				ALLEGRO_COLOR c = al_get_pixel(original, j, i);

				al_unmap_rgba(c, &r, &g, &b, &a);



				al_put_pixel(al_get_bitmap_width(img) - j, i, al_map_rgba(r, g, b, a));

			}
		}
	}

	if (sel == 2) {

		for (int i = 0; i < al_get_bitmap_height(img); i++) {

			for (int j = 0; j < al_get_bitmap_width(img); j++) {

				unsigned char r, g, b, a;

				ALLEGRO_COLOR c = al_get_pixel(original, j, i);

				al_unmap_rgba(c, &r, &g, &b, &a);



				al_put_pixel(j, al_get_bitmap_height(img) - i, al_map_rgba(r, g, b, a));

			}
		}
	}

	if (sel == 3) {

		for (int i = 0; i < al_get_bitmap_height(img); i++) {

			for (int j = 0; j < al_get_bitmap_width(img); j++) {

				unsigned char r, g, b, a;

				ALLEGRO_COLOR c = al_get_pixel(original, j, i);

				al_unmap_rgba(c, &r, &g, &b, &a);



				al_put_pixel(al_get_bitmap_width(img) - j, al_get_bitmap_height(img) - i, al_map_rgba(r, g, b, a));

			}
		}
	}


	//wrap up
	End(img);
}