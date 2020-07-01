import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '5947CE87AA6ADBCB3194EAB57C40C21135DA7CBC7BEE846472B5EA68E3F172D4',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}