import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import { siteConfig } from "@/config/site";
import { footerColumns, legalLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="border-t border-shuttle-200 bg-white pt-[70px] pb-12">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[92px]">
          <div className="flex w-full max-w-[528px] flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="text-sm leading-[1.6] text-shuttle-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <form action="#" className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <label className="flex h-[52px] w-full max-w-[376px] items-center rounded-input border border-shuttle-200 bg-white px-6 focus-within:outline-2 focus-within:outline-persian-800">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-base leading-[1.6] text-shuttle-950 placeholder:text-shuttle-950 focus:outline-none"
                  />
                </label>
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="max-w-[504px] text-xs leading-[1.6] text-shuttle-950">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:w-[581px]">
            {footerColumns.map((column) => (
              <ul key={column[0].label} className="flex flex-col gap-4 text-sm leading-[1.6] text-shuttle-950">
                {column.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-shuttle-200 pt-5 lg:mt-[100px]">
          <div className="flex flex-col gap-4 text-xs leading-[1.6] text-shuttle-950 sm:flex-row sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-6">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
