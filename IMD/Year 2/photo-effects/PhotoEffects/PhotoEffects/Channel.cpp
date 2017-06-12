#include "Main.h"



Channel::Channel()
{
}


Channel::~Channel()
{
}

void Channel::Apply(ALLEGRO_BITMAP* img, int sel) {

	

	if (sel == 0) {
		Begin(img);
		for (int i = 0; i <= al_get_bitmap_height(img); i++) {

			for (int j = 0; j <= al_get_bitmap_width(img); j++) {
				unsigned char r, g, b, a;
				ALLEGRO_COLOR c = al_get_pixel(original, j, i);

				al_unmap_rgba(c, &r, &g, &b, &a);

				al_put_pixel(j, i, al_map_rgba(r, 0, 0, a));
			}
		}
		End(img);
	}

	if (sel == 1) {
		Begin(img);
		for (int i = 0; i <= al_get_bitmap_height(img); i++) {

			for (int j = 0; j <= al_get_bitmap_width(img); j++) {
				unsigned char r, g, b, a;
				ALLEGRO_COLOR c = al_get_pixel(original, j, i);

				al_unmap_rgba(c, &r, &g, &b, &a);

				al_put_pixel(j, i, al_map_rgba(0, g, 0, a));
			}
		}
		End(img);
	}

	if (sel == 2) {
		Begin(img);
		for (int i = 0; i <= al_get_bitmap_height(img); i++) {

			for (int j = 0; j <= al_get_bitmap_width(img); j++) {
				unsigned char r, g, b, a;
				ALLEGRO_COLOR c = al_get_pixel(original, j, i);

				al_unmap_rgba(c, &r, &g, &b, &a);

				al_put_pixel(j, i, al_map_rgba(0, 0, b, a));
			}
		}
		End(img);
	}

	if (sel == 3) {
		Begin(img);
		for (int i = 0; i <= al_get_bitmap_height(img); i++) {

			for (int j = 0; j <= al_get_bitmap_width(img); j++) {
				unsigned char r, g, b, a;
				ALLEGRO_COLOR c = al_get_pixel(original, j, i);

				al_unmap_rgba(c, &r, &g, &b, &a);

				al_put_pixel(j, i, al_map_rgba(a, a, a, a));
			}
		}
		End(img);
	}
}