package com.challenge15.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "curso")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CursoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_curso")
    private Long id;

    @Column(name =  "nome_curso")
    private String nome;

    @Column(name = "desc_curso")
    private String desc;

    @JsonIgnore
    @ManyToMany(mappedBy = "cursos")
    private Set<AlunoEntity> alunos;

}
