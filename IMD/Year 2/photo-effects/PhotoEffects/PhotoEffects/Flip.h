#pragma once
class Flip : public Effect
{
public:
	Flip();
	~Flip();
	
	void Flip::Apply(ALLEGRO_BITMAP* img, int sel);
};

