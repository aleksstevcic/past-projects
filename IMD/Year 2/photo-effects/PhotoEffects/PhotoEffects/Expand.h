#pragma once
class Expand : public Effect
{
public:
	Expand();
	~Expand();

	void Expand::Apply(ALLEGRO_BITMAP* img);
};