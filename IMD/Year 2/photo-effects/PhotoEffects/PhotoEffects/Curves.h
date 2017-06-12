#pragma once
class Curves : public Effect
{
public:
	Curves();
	~Curves();

	void Curves::Apply(ALLEGRO_BITMAP* img);
};
