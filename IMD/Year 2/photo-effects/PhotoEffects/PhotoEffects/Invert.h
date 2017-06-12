#pragma once
class Invert : public Effect
{
public:
	Invert();
	~Invert();

	void Invert::Apply(ALLEGRO_BITMAP* img);
};

