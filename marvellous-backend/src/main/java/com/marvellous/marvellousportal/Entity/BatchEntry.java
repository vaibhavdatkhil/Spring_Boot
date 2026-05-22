package com.marvellous.marvellousportal.Entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.*;

@Document(collection = "batches")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BatchEntry
{
    @Id
    private String id;

    @NotBlank(message = "Batch name cannot be empty")
    @Size(min = 2, max = 50, message = "Name must be 2-50 characters")
    private String name;

    @Min(value = 1000, message = "Fees must be at least 1000")
    @Max(value = 500000, message = "Fees cannot exceed 500000")
    private int fees;

    // NO manual getters/setters needed
    // @Data annotation handles everything automatically
}