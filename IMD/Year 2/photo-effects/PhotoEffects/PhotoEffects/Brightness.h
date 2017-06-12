#pragma once
class Brightness : public Effect
{
public:
	Brightness();
	~Brightness();

	void Brightness::Apply(ALLEGRO_BITMAP* img);
};

