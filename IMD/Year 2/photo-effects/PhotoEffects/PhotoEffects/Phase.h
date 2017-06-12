#pragma once
class Phase : public Effect
{
public:
	Phase();
	~Phase();

	void Phase::Apply(ALLEGRO_BITMAP* img);
};

