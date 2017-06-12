#include "Main.h"



Effect::Effect()
{
}


Effect::~Effect()
{
}


void Effect::Begin(ALLEGRO_BITMAP* img) {
	//prepare bitmaps
	al_lock_bitmap(img, al_get_bitmap_format(img), ALLEGRO_LOCK_READWRITE);
	al_lock_bitmap(original, al_get_bitmap_format(original), ALLEGRO_LOCK_READWRITE);
	target = al_get_target_bitmap();
	al_set_target_bitmap(img);
	//get bitmap dimensions
	w = al_get_bitmap_width(img);
	h = al_get_bitmap_height(img);
}
void Effect::End(ALLEGRO_BITMAP* img) {
	//set target back
	al_set_target_bitmap(target);
	//move bitmap back to video memory
	al_unlock_bitmap(img);
	al_unlock_bitmap(original);
}

void Effect::Apply(ALLEGRO_BITMAP* img) {
	//prepare
	Begin(img);

	//go through all pixels


	//wrap up
	End(img);
}
