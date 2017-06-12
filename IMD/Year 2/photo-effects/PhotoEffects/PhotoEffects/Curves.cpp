#include "Main.h"



Curves::Curves()
{
}


Curves::~Curves()
{
}

void Curves::Apply(ALLEGRO_BITMAP* img) {
	//prepare
	Begin(img);
	float sum = 0;
	//go through all pixels

	for (int i = 0; i < al_get_bitmap_height(img); i++) {

		for (int j = 0; j < al_get_bitmap_width(img); j++) {

			unsigned char r, g, b, a;
			float tr, tg, tb;

			ALLEGRO_COLOR c = al_get_pixel(original, j, i);

			al_unmap_rgba(c, &r, &g, &b, &a);

			tr = r;
			tg = g;
			tb = b;

			sum = (tr + tg + tb) / 3;
			r *= sum;
			g *= sum;
			b *= sum;

			if (sum > 127.5) {

				sum -= 126.5;

				sum = sqrt((sqrt(sqrt(sum))));
				//sum /= 65;

				if (r >= 255)
					tr = 255;
				else
					tr *= sum;

				if (g >= 255)
					tg = 255;
				else
					tg *= sum;

				if (b >= 255)
					tb = 255;
				else
					tb *= sum;
			}

			if(sum < 127.5){

				sum = 127.5 - sum;
				sum = sqrt((sqrt(sqrt(sum))));
				//sum /= 65;

				tr /= sum;
				tg /= sum;
				tb /= sum;

			}

			al_put_pixel(j, i, al_map_rgba(tr, tg, tb, a));

		}
	}

	//wrap up
	End(img);
}