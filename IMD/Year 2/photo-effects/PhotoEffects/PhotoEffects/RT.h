#pragma once
class CRT : public Effect
{
public:
	CRT();
	~CRT();

	void CRT::Apply(ALLEGRO_BITMAP* img);
};

