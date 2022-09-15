      {
        source: '/{{inputs.zone_base_path}}',
        destination: `${process.env.ZONE_{{inputs.zone_name|to_screaming_snake}}_URL}/{{inputs.zone_base_path}}`
      },
      {
        source: '/{{inputs.zone_base_path}}/:path*',
        destination: `${process.env.ZONE_{{inputs.zone_name|to_screaming_snake}}_URL}/{{inputs.zone_base_path}}/:path*`
      },