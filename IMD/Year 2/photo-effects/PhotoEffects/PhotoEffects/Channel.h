#pragma once
class Channel : public Effect
{
public:
	Channel();
	~Channel();
	
	void Channel::Apply(ALLEGRO_BITMAP* img, int sel);
};