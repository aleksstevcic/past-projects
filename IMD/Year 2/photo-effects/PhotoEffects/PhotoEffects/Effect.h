#pragma once
class Effect
{
public:

	int w, h;

	ALLEGRO_BITMAP* target;

	Effect();
	~Effect();

	void Begin(ALLEGRO_BITMAP* img);
	void End(ALLEGRO_BITMAP* img);
	void Apply(ALLEGRO_BITMAP* img);
	ALLEGRO_BITMAP* original;  //original bitmap (img is the one that we change)
};

