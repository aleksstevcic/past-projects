#pragma once
class Vibrance : public Effect
{
public:
	Vibrance();
	~Vibrance();

	void Vibrance::Apply(ALLEGRO_BITMAP* img);
};

