import assert from "node:assert/strict";
import test from "node:test";
import { canManageSection } from "@/lib/auth/permissions";

test("product managers can manage catalogue content but not site settings", () => {
  assert.equal(canManageSection("PRODUCT_MANAGER", "products"), true);
  assert.equal(canManageSection("PRODUCT_MANAGER", "categories"), true);
  assert.equal(canManageSection("PRODUCT_MANAGER", "settings"), false);
});

test("HR managers can manage careers and applications only", () => {
  assert.equal(canManageSection("HR_MANAGER", "careers"), true);
  assert.equal(canManageSection("HR_MANAGER", "applications"), true);
  assert.equal(canManageSection("HR_MANAGER", "products"), false);
});

test("super admins can access all configured modules", () => {
  for (const section of ["products", "categories", "therapeutic-areas", "news", "careers", "applications", "certifications", "messages", "homepage", "settings", "users"] as const) {
    assert.equal(canManageSection("SUPER_ADMIN", section), true);
  }
});
