import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconDownload({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="download" {...attributes}>
      <path
        fill="#18181B"
        d="M12 15.575c-.133 0-.258-.02-.375-.063a.877.877 0 0 1-.325-.212l-3.6-3.6a.916.916 0 0 1-.288-.7 1.022 1.022 0 0 1 1-1.013.93.93 0 0 1 .713.288L11 12.15V5c0-.283.096-.52.287-.713A.968.968 0 0 1 12 4c.283 0 .52.096.713.287.191.192.287.43.287.713v7.15l1.875-1.875a.93.93 0 0 1 .713-.287c.275.008.512.112.712.312.183.2.28.433.287.7a.916.916 0 0 1-.287.7l-3.6 3.6c-.1.1-.208.17-.325.212a1.106 1.106 0 0 1-.375.063ZM6 20c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 18v-2c0-.283.096-.52.287-.713A.967.967 0 0 1 5 15c.283 0 .52.096.713.287.191.192.287.43.287.713v2h12v-2a.97.97 0 0 1 .288-.713A.968.968 0 0 1 19 15a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v2c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 20H6Z"
      />
    </SfIconBase>
  );
}
