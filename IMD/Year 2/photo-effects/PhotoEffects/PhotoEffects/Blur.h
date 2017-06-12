#pragma once
class Blur : public Effect
{
public:
	Blur();
	~Blur();

	void Blur::Apply(ALLEGRO_BITMAP* img);
};

