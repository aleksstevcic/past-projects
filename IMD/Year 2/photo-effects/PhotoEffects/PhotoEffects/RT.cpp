#include "Main.h"


CRT::CRT()
{
}


CRT::~CRT()
{
}

void CRT::Apply(ALLEGRO_BITMAP* img) {

	Begin(img);

	for (int i = 0; i < al_get_bitmap_height(img); i += 3) {

		for (int j = 0; j < al_get_bitmap_width(img); j += 3) {

			unsigned char r[9], b[9], g[9];
			unsigned char a[9];

			ALLEGRO_COLOR c[9];

			for (int k = 0; k < 3; k++) {
				for (int z = 0; z < 3; z++) {
					c[k + z] = al_get_pixel(original, j + z, i + k);
					al_unmap_rgba(c[k + z], &r[k + z], &g[k + z], &b[k + z], &a[k + z]);
				}
			}


			for (int t = 0; t < 9; t++) {
				r[t] = (r[0] + r[1] + r[2] + r[3] + r[4] + r[5] + r[6] + r[7] + r[8]) / 9;
				al_put_pixel(j, i, al_map_rgba(r[t], g[t], b[t], a[t]));
			}

			/*
			r[4] = (r[0] + r[1] + r[2] + r[3] + r[4] + r[5] + r[6] + r[7] + r[8]) / 9;
			g[4] = (g[0] + g[1] + g[2] + g[3] + g[4] + g[5] + g[6] + g[7] + g[8]) / 9;
			b[4] = (b[0] + b[1] + b[2] + b[3] + b[4] + b[5] + b[6] + b[7] + b[8]) / 9;
			*/

		}
	}

	End(img);
}