import { describe, expect, it } from "vitest";
import { activities } from "@/content/activities";
import { events } from "@/content/events";
import { services } from "@/content/services";
import { trainingPrograms } from "@/content/training";

describe("content integrity", () => {
  it("keeps service slugs unique", () => {
    const slugs = services.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("keeps training slugs unique", () => {
    const slugs = trainingPrograms.map((program) => program.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("keeps event slugs unique", () => {
    const slugs = events.map((event) => event.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("keeps activity slugs unique", () => {
    const slugs = activities.map((activity) => activity.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("provides meaningful service content", () => {
    for (const service of services) {
      expect(service.title.length).toBeGreaterThan(5);
      expect(service.summary.length).toBeGreaterThan(20);
      expect(service.scope.length).toBeGreaterThan(3);
      expect(service.deliverables.length).toBeGreaterThan(3);
    }
  });

  it("provides modules for every training program", () => {
    for (const program of trainingPrograms) {
      expect(program.modules.length).toBeGreaterThan(2);
      expect(program.objectives.length).toBeGreaterThan(2);
    }
  });
});
