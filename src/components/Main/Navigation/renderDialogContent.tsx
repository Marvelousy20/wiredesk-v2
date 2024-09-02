import { PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import WiredeskPopover from "./Popovers/wiredesk";
import TeamsPopover from "./Popovers/teams";
import TeammatesPopover from "./Popovers/teammates";
import TicketsPopover from "./Popovers/tickets";
import ChannelsPopover from "./Popovers/channels";

export const renderDialogContent = (label: string) => {
  switch (label) {
    case "WireDesk":
      return (
        <>
          <WiredeskPopover />
        </>
      );
    case "Teams":
      return (
        <>
          <TeamsPopover />
        </>
      );
    case "Teammates":
      return (
        <>
          <TeammatesPopover />
        </>
      );
    case "Ticketss":
      return (
        <>
          <TicketsPopover />
        </>
      );
    case "Channels":
      return (
        <>
          <ChannelsPopover />
        </>
      );
    // Add cases for other sections (Tickets, Channels) as needed
    default:
      return <p>No options available for this section.</p>;
  }
};
