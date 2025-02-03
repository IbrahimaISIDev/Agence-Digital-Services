// components/ui/Modal.jsx
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { cn } from "../../lib/utils"

const Modal = ({
  open,
  onClose,
  title,
  children,
  className,
  showCloseButton = true,
  ...props
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent 
        className={cn('sm:max-w-[425px]', className)} 
        {...props}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {showCloseButton && (
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          )}
        </DialogHeader>
        <div className="relative">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

Modal.displayName = 'Modal';

export { Modal };