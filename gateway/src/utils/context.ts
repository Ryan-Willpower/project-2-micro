// Library
import { Request } from "express"
import { ApolloError } from "apollo-server"

// Local import
import { extractJWT } from "./jwt"

export function context({ req }: { req: Request }) {
  const authorization = req?.headers?.authorization || ""

  if (authorization) {
    const jwt = authorization.replace("Bearer ", "")

    const payload = extractJWT(jwt)

    return payload
  }

  return ""
}
