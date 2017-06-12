#include "Main.h"



Expand::Expand()
{
}


Expand::~Expand()
{
}

void Expand::Apply(ALLEGRO_BITMAP* img) {
	//prepare
	Begin(img);

	//go through all pixels

	for (int i = 0; i < al_get_bitmap_height(img); i+= 3) {

		for (int j = 0; j < al_get_bitmap_width(img); j+= 3) {

			unsigned char r[9], g[9], b[9];
			float tr[9], tg[9], tb[9];

			for (int i = 0; i < 9; i++) {
				tr[i] = 0;
				tg[i] = 0;
				tb[i] = 0;
				r[i] = 0;
				g[i] = 0;
				b[i] = 0;
			}

			for (int k = 0; k < 3; k++) {
				for (int z = 0; z < 3; z++) {
					al_unmap_rgb(al_get_pixel(original, j + z, i + k), &r[k + z], &g[k + z], &b[k + z]);
				}
			}

			for (int k = 0; k < 3; k++) {
				for (int z = 0; z < 3; z++) {

					tr[k + z] = 1.5 * (r[0] + r[1] + r[2] + r[3] + r[4] + r[5] + r[6] + r[7] + r[8])/9;
					//tr[k + z] /= 9;

					tg[k + z] = 1.5 * (g[0] + g[1] + g[2] + g[3] + g[4] + g[5] + g[6] + g[7] + g[8])/9;
					//tg[k + z] /= 9;

					tb[k + z] = 1.5 * (b[0] + b[1] + b[2] + b[3] + b[4] + b[5] + b[6] + b[7] + b[8])/9;
					//tb[k + z] /= 9;

					al_put_pixel(j + z, i + k, al_map_rgb(tr[k + z], tg[k + z], tb[k + z]));
				}
			}

		}
	}

	//wrap up
	End(img);

}

	