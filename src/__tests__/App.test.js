import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Test 1: Top-level heading
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

// Test 2: Image with alt text
test("displays an image of myself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/portrait of nelson munyua/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

// Test 3: About Me heading
test("displays a second-level heading with text 'About Me'", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(heading).toBeInTheDocument();
});

// Test 4: Biography paragraph
test("displays a paragraph with a short biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/software engineering/i);
  expect(paragraph).toBeInTheDocument();
});

// Test 5: Links to GitHub and LinkedIn
test("has links to GitHub and LinkedIn", () => {
  render(<App />);
  const github = screen.getByRole("link", { name: /github/i });
  const linkedin = screen.getByRole("link", { name: /linkedin/i });
  expect(github).toHaveAttribute("href", "https://github.com/nelsonmunyua");
  expect(linkedin).toHaveAttribute(
    "href",
    "https://linkedin.com/in/nelsonmunyua"
  );
});