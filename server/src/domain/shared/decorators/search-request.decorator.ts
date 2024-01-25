import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const SearchRequest = createParamDecorator(
  (attribute: string = null, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    return attribute ? request?.[attribute] : request;
  },
);
