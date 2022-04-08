import { Request, Response } from "express";

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
  res.render("index", {
    title: "Home",
  });
};
export const playHome = (req: Request, res: Response) => {
  res.render("home", {
    title: "Home",
  });
};
export const profile = (req: Request, res: Response) => {
  res.render("./account/profile", {
    title: "Home",
  });
};
export const login = (req: Request, res: Response) => {
  res.render("./account/login", {
    title: "Home",
  });
};
export const signup = (req: Request, res: Response) => {
  res.render("./account/signup", {
    title: "Home",
  });
};
export const createRoom = (req: Request, res: Response) => {
  res.render("create-room", {
    title: "Home",
  });
};
export const listRoom = (req: Request, res: Response) => {
  res.render("list-room", {
    title: "Home",
  });
};
